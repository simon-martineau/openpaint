import { useConfigStore } from "../../contexts/ConfigStore/ConfigStore";

const ConfigStoreViewer = () => {
  const [state] = useConfigStore();

  const prettyPrintState = JSON.stringify(state);

  return <div style={{ fontFamily: "monospace" }}>{prettyPrintState}</div>;
};

export default ConfigStoreViewer;
