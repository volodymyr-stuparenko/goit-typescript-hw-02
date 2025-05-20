import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: 'none',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};
ReactModal.setAppElement(document.getElementById('root'));

const ImageModal = ({ isOpen, onRequestClose, currentImage }) => {
  return (
    <ReactModal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      {currentImage && <img src={currentImage} alt="Selected" />}
    </ReactModal>
  );
};

export default ImageModal;
