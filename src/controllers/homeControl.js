class HomeControl {
  static say(req, res, next) {
    try {
      res.status(200).json({
        say: "hello",
      });
    } catch (err) {
      next(err);
    }
  }
}

export default HomeControl;
