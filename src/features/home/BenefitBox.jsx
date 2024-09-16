function BenefitBox({ children, type }) {
  return <div className={"benefit-box " + type}>{children}</div>;
}

export default BenefitBox;
