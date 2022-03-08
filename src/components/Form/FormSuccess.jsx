const FormSuccess = ({ goBack }) => {
  return (
    <>
      <h2 className='success__message'>Yeeey you just subscribed!</h2>
      <button className='btn success__btn' onClick={goBack}>
        Subscribe Again!
      </button>
    </>
  );
};

export default FormSuccess;
