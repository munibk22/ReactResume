import React from "react";
import { Card} from "react-bootstrap";

const FooterPage = () => {
  return (
    <Card>
  <Card.Header>Munib Khan</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        
Munib Khan is not affiliated with GitHub or any companies mentioned as users of our product. All other trademarks and copyrights are property of their respective owners.






Privacy Policy
Terms of Service
© Munib Khan 2021
      </p>
      <footer className="blockquote-footer">
        Someone famous in <cite title="Source Title">Source </cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default FooterPage;