import React, { useState } from "react";
// import React, { useState } from 'react';
import { Modal, Button } from "antd";

const AppWorks = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it Works</h2>
          <p>This show us how we can work very samrt and eligibility</p>
        </div>
        <div className="contentHolder">
          <Button onClick={showModal}>
            <i className="fas fa-blog"></i>
          </Button>
        </div>
        <Modal
          title="My Works"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="workLinks">
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://michealabidfekrysaad.github.io/shopping-cart-angular/home"
            >
              Shopping Website
            </a>
          </div>
          <div className="workLinks">
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ng-course-recipe-book-c3409.firebaseapp.com/auth"
            >
              Recipes website
            </a>
          </div>
          <div className="workLinks">
            {" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://demo-game-for-kid.herokuapp.com/"
            >
              Kids game
            </a>
          </div>
          
        </Modal>
      </div>
    </div>
  );
};

export default AppWorks;
