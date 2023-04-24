// Styling
import styles from '../css/Modal.css';

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div> className={styles.darkBG} onclick={() => setIsOpen(false)}
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Dialog</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)} >
              Close Modal
            </button>
            <div className={styles.modalContent}>
              Sure you want to close this?
            </div>
            <div className={styles.modalActions}>
              <div>
                <button
                  className={styles.deleteBtn}
                  onClick={() => setIsOpen(false)}>
                  Delete
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}>
                    Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;