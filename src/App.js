import React, { useState, useCallback, useMemo } from 'react';
import { useDispatch } from "react-redux";

import { addDomain } from './redux/modules/domains/actions'
import Table from './components/Table';
import Input from './components/Input';
import Button from './components/Button';
import "./style.css";

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleOnChangeInputValue = useCallback(value => setInputValue(value), []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(addDomain(inputValue));
    setInputValue('');
  }, [inputValue]);

  const TableMemo = useMemo(() => <Table />, []);

  return (
    <div className="container">
      <h1>Uptime Monitor</h1>

      <form>
        <Input
          inputValue={inputValue}
          handleOnChangeInputValue={handleOnChangeInputValue}
        />
        <Button handleSubmit={handleSubmit} />
      </form>

      <div className="columns">
        <div>Domain</div>
        <div>Last Checked</div>
        <div>Latency</div>
        <div>Status</div>
      </div>

      {TableMemo}
    </div>
  );
}

export default App;
