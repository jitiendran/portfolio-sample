const useClassName = (localStyle) => {
    return (...classnames) => {
        let classnamesList = "";
        classnames.forEach((className) =>
            localStyle[className]
                ? (classnamesList += ` ${localStyle[className]}`)
                : (classnamesList += ` ${className}`)
        );
        return classnamesList;
    };
};

export default useClassName;
