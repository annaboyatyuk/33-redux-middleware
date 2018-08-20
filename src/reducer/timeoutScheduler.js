
const timeoutScheduler = store => next => action => {

  if(!action.meta || !action.meta.delay) {
    return next(action);
  }
  const timeoutID = setTimeout(
    () => next(action),
    action.meta.delay
  );
  return function cancel() {
    console.log('canceled');
    clearTimeout(timeoutID);
  };

};

export default timeoutScheduler;