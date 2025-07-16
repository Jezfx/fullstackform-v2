import { Input } from "./input";
import { Box } from "@repo/ui/box";
import { Field, floatingStyles } from "../field";

const meta = {
  title: "UI/Atoms/Input",
  component: Input,
  tags: ["input"],
};

export default meta;

export const Primary = () => (
  <Field.Root>
    <Box pos="relative" w="full">
      <Input
        roundedRight={["lg", "0"]}
        className="peer"
        defaultValue={"foo"}
        placeholder=""
        name="firstName"
        bg="white"
        mb={["1rem", "0"]}
        _focus={{
          zIndex: 2,
        }}
      />
      <Field.Label css={floatingStyles}>
        First Name <Field.RequiredIndicator color="currentColor" />
      </Field.Label>
    </Box>
  </Field.Root>
);
