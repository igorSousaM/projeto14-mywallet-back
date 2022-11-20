export function tokenValidation(req,res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearear ", "");
  
    if (!token) {
      return res.status(401).send("não tem token");
    }

    res.locals.token = token
    next()
};
