// Local component imports
import { Section, Container } from "@/components/craft";
import { Questionnaire } from "./steps";

const Form = () => {
  return (
    <Section>
      <Container className="md:px-6 md:pt-6 pt-8 px-0">
        <Questionnaire />
      </Container>
    </Section>
  );
};

export default Form;
