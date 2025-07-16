"use client";

import { useRef } from "react";

import { Box } from "@repo/ui/box";
import { Text } from "@repo/ui/text";
import { Link } from "@repo/ui/link";
import { Group } from "@repo/ui/group";
import { Input } from "@repo/ui/input";
import { VStack } from "@repo/ui/stack";
import { Button } from "@repo/ui/button";
import { Textarea } from "@repo/ui/textarea";
import { Field, floatingStyles } from "@repo/ui/field";

import { TPageContactForm } from "../page-contact.types";

export const PageContactForm: TPageContactForm = ({
  state,
  formAction,
  pending,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Box pt={"10%"} display="flex" justifyContent="center" alignItems="center">
      <Box
        bg="purple.100"
        px={10}
        py={12}
        borderRadius="lg"
        w="100%"
        maxW="600px"
        mx="auto"
      >
        <form action={formAction} ref={formRef}>
          <VStack align="start" gap={4}>
            <Group
              attached
              flexDirection={["column", "row"]}
              align={"start"}
              w="100%"
            >
              <Field.Root invalid={!!state?.errors?.fields?.firstName} required>
                <Box pos="relative" w="full">
                  <Input
                    roundedRight={["lg", "0"]}
                    className="peer"
                    defaultValue={state?.data?.firstName || ""}
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
                  <Field.ErrorText>
                    {state?.errors?.fields?.firstName || ""}
                  </Field.ErrorText>
                </Box>
              </Field.Root>

              <Field.Root invalid={!!state?.errors?.fields?.lastName} required>
                <Box pos="relative" w="full">
                  <Input
                    roundedLeft={["lg", "0"]}
                    defaultValue={state?.data?.lastName || ""}
                    className="peer"
                    placeholder=""
                    bg="white"
                    name="lastName"
                  />
                  <Field.Label css={floatingStyles}>
                    Last Name <Field.RequiredIndicator color="currentColor" />
                  </Field.Label>
                  <Field.ErrorText>
                    {state?.errors?.fields?.lastName || ""}
                  </Field.ErrorText>
                </Box>
              </Field.Root>
            </Group>
            <Field.Root invalid={!!state?.errors?.fields?.email} required>
              <Box pos="relative" w="full">
                <Input
                  className="peer"
                  placeholder=""
                  name="email"
                  defaultValue={state?.data?.email || ""}
                  type="email"
                  bg="white"
                  autoComplete="email"
                  pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
                />
                <Field.Label css={floatingStyles}>
                  Work Email <Field.RequiredIndicator color="currentColor" />
                </Field.Label>
                <Field.ErrorText>
                  {state?.errors?.fields?.email || ""}
                </Field.ErrorText>
              </Box>
            </Field.Root>
            <Field.Root invalid={!!state?.errors?.fields?.message} required>
              <Field.Label>
                Message <Field.RequiredIndicator color="currentColor" />
              </Field.Label>
              <Textarea
                placeholder="Enter your message"
                bg="white"
                variant="outline"
                name="message"
                defaultValue={state?.data?.message || ""}
                h="150px"
              />
              <Field.ErrorText>
                {state?.errors?.fields?.message || ""}
              </Field.ErrorText>
            </Field.Root>
            <Text fontSize="sm" color="gray.500">
              For information about our privacy practices and commitment to
              protecting your privacy, please review our{" "}
              <Link>Privacy Policy</Link>.
            </Text>
            <Button
              type="submit"
              disabled={pending}
              loading={pending}
              loadingText="Sending..."
              spinnerPlacement="start"
            >
              Send Message
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};
