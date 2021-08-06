function Error({ error }) {
  return <small style={{ color: "red" }}>{error.message}</small>;
}

export default Error;
