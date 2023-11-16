import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section  container-fluid" id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi,👋<span style={{ color: "#0A81AB", fontStyle: "italic" }}>Manjari Raikwar</span> an aspiring and determined <span style={{ color: "#0A81AB", fontStyle: "italic" }}>Full Stack Web Developer</span>, curious to explore different industry-standard tech stacks and environments.
              Skilled in the <span style={{ color: "#0A81AB", fontStyle: "italic" }}>MERN stack</span> and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization's goal.
              <br />
              <br />
              A Computer Science graduate, developed passion for coding as a child when printed my first <span style={{ color: "#0A81AB", fontStyle: "italic" }}> "Hello world"</span> 😃, that hello world just hits different 😌 . As explored different programming languages and tools in college. Since then aesthetically functional websites has just been my thing.
            </p>
          </Col>

        </Row>
        <Row>
        </Row>
      </Container>
      <Container>
        <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
          <span className="purple">Experience</span>
        </h1>
        <ExperienceCard
          logo="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NEBAODQ0QDhAQEA0WDw4YDQ8OEA0QFhEWFhYVExcYKCggGSYxGxUVITEhMSosLi8uFx8zRDMsOCk5LzcBCgoKDg0OFxAQFy0fHx0tLS0tKy0rLS0tKystLS0tLSsrLS0tKy0tLTctLS0tKystLS0tLS03LS0tLTctLS0rLf/AABEIAMgAyAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYDBQcCBP/EADgQAAICAAMFAwkGBwAAAAAAAAABAgMEBhESITFRYRMi0QUyQUNSVIGTsRdCYnGR0gcjM6LB4eL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQQFAwL/xAAlEQEAAQMDBAMBAQEAAAAAAAAAAQIDEQQhMRJBUWEUInFCMhX/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAhsj9Rxy0VubvJ8J9m79Wno5KEnBP819TlN6jOHCdVbicZbuuyM0pRalFpNNPVNc0dc5jZ3iYneGQlIAAAAAAAAAAAAAAAAAAAAAAA8tke0Ttu57nHNXa7WGwsu5vVlq9ZzjHp19P1pX7+doZup1OdqVMKmzP2lZspZnlg2qbm5UN9W6XzXTX0Fixdmnlc02pmjaeHTarYzipQkpRkk1JPVNdDRictWJyyB6AAAAAAAAAAAAAAAAAAAAgCG9CP1GccueZxzV2u1hsLL+XvVlq9ZzjHp9Slfv9oZmp1PV9aeFNKkqGfAAAsmU8zywclVa3KiT4cXU+cenQsWb/AE7TwuafU9E4nh0+m2NkVOElKMkmpJ6po0InvDWpqiYzD2SlIAAAAAAAAAAAAAAAAAA8tke0Ttu53nHNXa64bCy0r3qyxes5qPT6lK/fztDM1Op6vrSpxUyoegcHAAAE4yhYsqZmngpKuzWVEnvXF1P2o+B3s3ujaeFzTamaNp4dQovhZFThJSjJJxknqmjQictamrLIS9JAAAAAAAAAAAAAAAgCG9CP1Gccud5xzV221hsLL+XvVli9Z0j06+kpXr2doZmp1PV9aeFOKnKhnwDODnaAHpt6csY+yvtY4d7LWq70VJrj5rep2izXjMO8ae5MZamcXFtSTTTaaaaaa3bzjiYndxmJicSgIyBCw5VzLPBS2J6zok+9Hi637UfAsWb3Tt2W9PqOjaeHUcPfC2MZ1yUoyScZLemi/TVFUZhr01RMZhkPT0kAAAAAAAAAAAAAHltIj2idt3O845q7bXDYWWle9WWJ/wBXpHp9Slfv52hmanU9X1pU4qcqHoJmcHARB+L1k7KmuzicXHk6qmv0lPwLtmz3lo6XS4+1S+FxpKvmzK0cWndSlC9LfwUbkvQ+vUr3rPXH1U9Tpor3jlzS6qVcnCcXGUW1KLTTTKExhlVU4eDy8QE8J5b/ACtmSeBlsT1nRJ96HFwb+9HwO9m7088LWn1E0bTw6lhr4WwjZXJSjJJxkuDTNCJy16asspL0kAAA+Dyz5RjhKZ3yi5KCW5cW3JJflvaPFVWIzh4uV9EZVD7RJe5r57/aVvl74wz/APob/wCT7RJe5r57/aPl+k/P9PUP4ib+9hNFzV+rXwcR8v0n5/pY/IuY8Lje7XPZnpvqklGWnNeh/A70XYqWrWooufrcHV34AIb03tkccozjlzrOOau22sNhpaVb1ZYvW9I9PqUr17O0MzU6nP1p4U8qcqGfAJnBG+0BOPB6XrJ2VPNxOLjydVTX90/AuWbHeWjpdL/VS+Fxo/iQkA1HljL2Fxm+2Gk1wsi9men+fic67VNTjcs019les/h5DXu4qSXJ1KT/AFTRw+L7VfgU+Xn7O174/k/7I+J7PgR5Ps7j72/k/wDQ+L7PgR5W7yVgYYWmFENXGCa1fF72238Wy1RT0wu26OmnD6z09pAAAMOJohbGVdkVKMk1KL4NETGYw81UxU5dmnLc8DLbhrKiT7suLg392XiZ12zNM5ZOo080TmOFfOCmBL3TbKElOEnGUWnGSbTTXLQmJmJymJxOYdLynmmOLSpvajelu9CuXNdehoWr/Xt3a2n1MVxirlZ20t7O/G63xu51nDNXba4bDS0qWqssT/q9Ivl19JSv3+raGbqtTn6wp5UZ8+AmZwcAjwfi95Oyp5uJxceTqqa/SU/AuWbPeWlpdLj7VL2XGj6AJAAQRuBIAAAR3AlIAABAGPEUQtjKFkVKMk1KL3poiYy81U5cuzVlqeBlt16yok+7Li637MvEz71np3jhk6nTTRvHCvFflUie0gExk0002mmmnq01pv3aExsROGxxPl/G2w7KzETlDTRrcnJfia3s9zdql2qv3ZjlrTntLjM+QTsc7QE48ER2XzJ2VNNnFYqO/c6qmuH4p+Bcs2e8tLS6X+ql6RcaP4kAAAAAAAAAAAAAAABAGO+mFkXCcVKMk1KLWqaPMxGMS81UxMYly/NeWZ4KXaV6yok9z4ut+zLxKF6z07xwydTpuicxwrpXVAAEYwDZITHgiPC+ZOypps4rFx37nVU1w5Sn4FyzZ7y0tLpcfapetC40fQEJCQAAAAAAAAAAAAAAABAGO+mNkXCcVKMk1KLWqaZExl5qpy5jmzLMsFJ21Jyok+PF1Pk/Ez71jp3jhk6jTdG8cK2V1T9Byc7QCfScdl9ydlTZ2cVio79zqqa838UvAu2bPeWjpdL/AFUvKLjR/EgAAAAAAAAAAAAAAAAAAAAgDxdVGcXCcVKMk04taprqRMdpRNMTGJcxzbliWDbtpTlRJ9W6Xyl019Jn37PTvHDJ1Om6N44Vo4elPHhfcnZU2dnFYqPe3OqprzeUpdehcsWMby0tNpcfapedC40fQEJCQAAAAAAAAAAAAAAAAAAAAADHbXGacZJSi004tJprqRMZRMZanDZYwFU1bDDraT1WspSjF9E3oc4s0Q4xp7dM7Q3J1d0gAAAAAAAAAAAAAAAAAAAAAAAAABBGIAkSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9k="
          title="Front-end Developer"
          company="Crelio Health"
          companyD="Dec 2022-Apr 2023"
          tech="React, Redux, Reactstrap, Pyhton, Django"
          techD="•Developed/maintained features using react & redux
          .Collaborated with design/backend team for seamless
          integration."
        />
      </Container>
    </Container>
  );
}
export default SelfIntro;
