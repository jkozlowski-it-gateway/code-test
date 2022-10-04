import { useEffect } from "react";

// TASK 5 'testFunc' may invoke too often, resolve that issue

function Task5() {
  const testFunc = () => {
    //
  };

  useEffect(() => {
    testFunc();
  }, [testFunc]);

  return null;
}

export default Task5;
