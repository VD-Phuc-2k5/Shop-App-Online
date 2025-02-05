function validate(cb) {
  return async (req, res, next) => {
    const { error, value } = cb.validate(req.body);

    if (error) {
      return res.status(400).json({
        message: "Validation Error",
        error: error.details[0].message,
      });
    }

    next();
  };
}

export default validate;
