export default function Input({ labelText, name, type, required }) {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input id={name} name={name} type={type} required={required} />
    </>
  );
}
