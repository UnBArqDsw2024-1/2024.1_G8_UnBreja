import styled from "styled-components";

function PageHeader({ className, title, subtitle }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default styled(PageHeader)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 214px;
  margin: 60px 0 42px 52px;

  h1 {
    font-size: 42px;
    font-weight: 800;
    font-family: "Inter", sans-serif;
    color: white;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
    color: #999797;
  }
`;
