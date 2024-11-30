import React from "react";
import Modal from "../../Modal";

export const CharacterArtifacts = ({children, title, onClose}) => {
  return (
    <Modal title={title} onClose={onClose}>
          {children}
      </Modal>
  );
};
