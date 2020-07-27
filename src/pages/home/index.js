import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  Suspense,
} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import FipeLayout from "../../layouts/FipeLayout";
import Loading from "../../components/Loading";
import SearchSelect from "../../components/SearchSelect";
import Summary from "../../components/Summary";
import { translateSteps } from "../../helpers/steps";
import { fetch, resetStep } from "../../store/actions";

const Result = React.lazy(() => import("../../components/Result"));

const Home = () => {
  const dispatch = useDispatch();
  const { isFetching, options, selected, step, result, error } = useSelector(
    (state) => {
      return {
        isFetching: state.general.isFetching,
        options: state.options,
        selected: state.selected,
        step: state.general.step,
        result: state.general.result,
        error: state.general.error,
      };
    },
    shallowEqual
  );

  const [filteredResults, setFilteredResults] = useState(options[step]);

  useEffect(() => {
    setFilteredResults(options[step]);
  }, [options, step]);

  const handleOptionSelection = useCallback(
    (e, item) => {
      e.preventDefault();
      if (filteredResults.length) {
        dispatch(fetch(step, selected, item));
      }
    },
    [step, selected, filteredResults]
  );

  const handleInputChange = useCallback(
    (e) => {
      e.preventDefault();
      const { value } = e.target;
      const filterInputArray = value.split(" ");
      const newFilteredArray = options[step].filter((option) => {
        return filterInputArray.every((inputWord) =>
          option.nome.toLowerCase().includes(inputWord.toLowerCase())
        );
      });
      setFilteredResults(newFilteredArray);
    },
    [options]
  );

  const handleSummaryClick = useCallback((stepClicked) => {
    dispatch(resetStep(stepClicked));
  });

  const translatedStep = useMemo(() => translateSteps(step).toUpperCase());

  if (error)
    return (
      <FipeLayout>
        <h2>{error.message}</h2>
      </FipeLayout>
    );

  if (result) {
    return (
      <FipeLayout>
        <Suspense fallback={<Loading />}>
          <Result result={result} />
        </Suspense>
      </FipeLayout>
    );
  }

  return (
    <FipeLayout>
      <Summary selected={selected} handleOnClick={handleSummaryClick} />
      {!isFetching ? (
        filteredResults && (
          <SearchSelect
            step={translatedStep}
            options={filteredResults}
            onOptionSelection={handleOptionSelection}
            onInputChange={handleInputChange}
          />
        )
      ) : (
        <Loading />
      )}
    </FipeLayout>
  );
};

export default Home;
