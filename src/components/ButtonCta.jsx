const ButtonCta = ({ faIconClass, ctaText }) => {
    if (faIconClass) {
        return (
            <button>
                <i className={faIconClass}></i>
                <span>{ctaText}</span>
            </button>
        )
    }
    return (
        <button>
            {ctaText}
        </button>
    )
}

export default ButtonCta