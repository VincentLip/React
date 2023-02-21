import classes from './ModalComponent.module.css'

const ModalComponent1 = (props) => {

const closeModal1Handler = (event) => {
    if (event.target === event.currentTarget) {
    props.closeModal1()
    }
}

return (
    <div className={classes.modal} onClick={closeModal1Handler}>
    <div className={classes['modal-content']}>
        {props.children}
    </div>
    </div>
)
}

export default ModalComponent1