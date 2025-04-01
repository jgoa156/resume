import {
  Bar
} from "./styles";

export default function AnimatedLogo() {
  return (
    <div>
      <Bar />
      <Bar delay={0.05} />
      <Bar delay={0.1} />
    </div>
  );
}