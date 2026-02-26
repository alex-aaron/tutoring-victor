
describe("Reduce Practice", () => {

  describe("getNumDirector()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "reduce");
    });
    afterEach(() => {
      Array.prototype.reduce.restore();
    });

    it('should return the number of films from input director', () => {
      const result = getNumDirector(collection, 'John Carpenter');
      expect(result).to.equal(2);
    });

    it('should use the native reduce method', () => {
      getNumDirector(collection, 'John Carpenter')
      Array.prototype.reduce.called.should.be.true;
    });
  });

  describe("getSuspenseTitles()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "reduce");
    });
    afterEach(() => {
      Array.prototype.reduce.restore();
    });

    it('should return an array of suspense film titles', () => {
      const result = getSuspenseTitles(collection);
      const correct = ["Rear Window", "Psycho"]
      expect(result).to.deep.equal(correct);
    });

    it('should use the native reduce method', () => {
      getSuspenseTitles(collection);
      Array.prototype.reduce.called.should.be.true;
    });
  });

  describe("getNumDocumentaryFeatures()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "reduce");
    });
    afterEach(() => {
      Array.prototype.reduce.restore();
    });

    it('should return the number of documentary features', () => {
      const result = getNumDocumentaryFeatures(collection);
      expect(result).to.equal(3);
    });

    it('should use the native reduce method', () => {
      getNumDocumentaryFeatures(collection);
      Array.prototype.reduce.called.should.be.true;
    });
  });

  describe("reduceObjects()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "reduce");
    });
    afterEach(() => {
      Array.prototype.reduce.restore();
    });

    it('should return an object', () => {
      const result = reduceObjects(collection);
      const correct = {
        "Rear Window": 1954,
        "Psycho": 1960,
        "The Thing": 1982,
        "Big Trouble in Little China": 1986,
        "Fright Night": 1985
      };
      expect(result).to.deep.equal(correct);
    });

    it('should use the native map method', () => {
      reduceObjects(collection);
      Array.prototype.reduce.called.should.be.true;
    });
  });

});


