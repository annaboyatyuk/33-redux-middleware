let zeroValidation = store => next => action => {



  if(action.payload.budget < 1 || action.payload.price < 1) {
    alert('wooooooaaahhh enter a number above $0');
  }
  else {
    return next(action);
  }

};

export default zeroValidation;

