const Button = (props) => {
    return (
        <button {...props}>
            {props.children}
            <style jsx>
                {`
                    button {
                        color: #fff;
                        background: var(--primary);
                        padding: 12px;
                        border-radius: 4px;
                        border: none;
                        font-weight: bold;
                        font-size: 16px;
                        min-width: 120px;
                        text-align: center;
                        cursor: pointer;
                    }
                    button:hover {
                        transition: all 0.25s;
                    }
                    button:focus {
                        outline: 0;
                    }
                `}
            </style>
        </button>
    );
};
export default Button;
