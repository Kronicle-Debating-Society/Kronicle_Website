const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (err) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }                             
};

export { asyncHandler };
/* 
example for how to use this utility 



const getData = async (req, res) => {
    const result = "Fetched data!";
    res.json({ success: true, message: result });
};


app.get('/get-data', asyncHandler(getData));



this is just an example this is used to handle all the async funtions
*/