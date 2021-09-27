import React from "react";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

const AppFaq = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam
          </p>
        </div>
        <Collapse accordion>
          <Panel header="How to setup the theme?" showArrow={false} key="1">
            <p>
              Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant
              bonorum, te ius vide maiorum hendrerit. In alii instructior vix,
              vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret
              dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos
              mnesarchum argumentum. Semper nusquam urbanitas sea te.
            </p>
          </Panel>
          <Panel
            header="Can I change plan or cancel at any time?"
            showArrow={false}
            key="2"
          >
            <p>
              Postea ceteros corrumpit ius te, eos epicuri intellegebat
              consequuntur et. Sint quot suscipiantur ea nam. Nam pericula
              evertitur ut, per et quod nostro, autem augue id has. Virtute
              epicurei quo te, pri et novum essent senserit.
            </p>
          </Panel>
          <Panel header="Can I manage multiple task?" showArrow={false} key="3">
            <p>
              Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia
              ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum
              neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem
              nec. Sea i
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            velit necessitatibus praesentium aliquid eos in neque recusandae,
            incidunt esse dolore voluptatum nesciunt quod soluta consequuntur
            voluptatibus ab excepturi nobis! Porro!
          </p>
          <Button
            type="primary"
            size="large"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=michealabidfekry@gmail.com"
          >
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppFaq;
