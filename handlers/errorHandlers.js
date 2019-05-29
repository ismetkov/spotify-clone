const notFound = (req, res, next) => {
  const err = new Error('Not Found')

  err.status = 404
  next(err)
}

const serverError = (error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
}

export default { notFound, serverError }
