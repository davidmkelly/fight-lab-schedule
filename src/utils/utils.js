export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  return isValid;
};

export const updateInputAndForm = (event, form, inputIdentifier) => {
  const updatedFormElement = updateObject(form[inputIdentifier], {
    value: event.target.value,
    valid: checkValidity(event.target.value, form[inputIdentifier].validation),
    touched: true,
  });

  const updatedNoteForm = updateObject(form, {
    [inputIdentifier]: updatedFormElement,
  });

  let formIsValid = true;
  // eslint-disable-next-line no-unused-vars
  for (let inputIdentifiers in updatedNoteForm) {
    formIsValid = updatedNoteForm[inputIdentifier].valid && formIsValid;
  }

  return [formIsValid, updatedNoteForm];
};

export const objFormToArr = form => {
  const formElementsArray = [];
  for (const [key, value] of Object.entries(form)) {
    formElementsArray.push({
      id: key,
      config: value,
    });
  }
  return formElementsArray;
};

export const deleteReducer = () => {};

export const wait = seconds => {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

export const calendarColorPicker = className => {
  const randomColors = ['#ACC18A', '#FEC9F1', '#5FAD56'];

  switch (className) {
    case 'Kickboxing':
      return '#EF6461';
    case 'Gi BJJ':
      return '#5E747F';
    case 'No-Gi BJJ':
      return '#FAA300';
    default:
      return randomColors[Math.floor(Math.random() * 3 + 1) - 1];
  }
};
