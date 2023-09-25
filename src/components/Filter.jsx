const Filter = props => {
  const { filter, hfc } = props;
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={hfc} value={filter} name="filter" />
    </>
  );
};
export { Filter };
