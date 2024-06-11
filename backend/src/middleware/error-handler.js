
export  const errorHandler = (
    err,
    req,
    res,
    next
  ) => {

    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error!';
   
    return res.status(errorStatus).json({
      status: errorStatus,
      message: errorMessage,
      success: false,
    //   stack: err.stack,
  })
  }

  
