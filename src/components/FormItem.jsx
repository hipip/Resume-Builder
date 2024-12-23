const FormItem = ({
  htmlFor,
  labelTxtContent,
  value,
  placeHolder,
  onChange,
  type = "text",
}) => {
  return (
    <div className="form-item">
      <label htmlFor={htmlFor}>{labelTxtContent}</label>
      <input
        className="inp"
        type={type}
        id={htmlFor}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormItem;
