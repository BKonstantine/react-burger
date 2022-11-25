export default function CustomButton(props) {
  return (
    <button className={`${props.style} pl-5 pr-5 pt-4 pb-4`} type="button">
      {props.children}
    </button>
  );
}
