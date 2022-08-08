import {
  Bullseye,
  Card,
  CardBody,
  CardFooter,
  TextContent,
} from "@patternfly/react-core";

export function AboutUs() {
  const aboutUsContent = (
    <Card isPlain isLarge>
      <CardBody>
        <TextContent>
          <div className="pf-u-text-align-center">
            We have collected all the wisdom from the internet on how to create
            wonderful conference submissions and put that into an intuitive
            form. CFP Guru helps you structure your idea into a winning format.
          </div>
        </TextContent>
      </CardBody>
      <CardFooter className="pf-u-text-align-center">
        Made with ❤ for aspiring speakers | Copyright © 2022 cfp-guru
      </CardFooter>
    </Card>
  );
  return <Bullseye>{aboutUsContent}</Bullseye>;
}
