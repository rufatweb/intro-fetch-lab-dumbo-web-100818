const expect = chai.expect

describe('swapi.js', () => {
  describe('Opening Crawl', () => {
    it('When the user clicks the button "Get Opening Crawl", you should fetch the data from the correct URL', () => {
      expect(myVariable).to.eq(42)
    })

    it('When the promise is resolved, the opening crawl should appear on the page', () => {
      expect(myVariable).to.eq(42)
    })
  })

  describe('Star Wars Planets', () => {
    it("On submit of the planet form, fetch that planet's data from the correct url", () => {
      expect(myFunction(9001)).to.be.true
    })

    it('When the promise resolves, display the name and climate of the planet in the `#planetData`', () => {
      expect(myFunction(42)).to.be.false
    })

    it('Validates that the planet id is a number between 1 and 60', () => {
      // multiple expects here
      expect(myFunction(42)).to.be.false
    })
  })

  describe('These Are The Droids', () => {
    it('When the page loads, fetch the data for the characters', () => {
      expect(myFunction(9001)).to.be.true
    })

    it("When the promise resolves, display each droid's name, height, and mass on the screen in the appropriate divs", () => {
      expect(myFunction(42)).to.be.false
    })

    it("When the promise resolves, each droid div should have a button to 'Show Homeworld Details'", () => {
      expect(myFunction(42)).to.be.false
    })

    it('When the user clicks the button "Show Homeworld Details" for either droid, you should fetch the homeworld planet data from the correct URL', () => {
      expect(myVariable).to.eq(42)
    })

    it("When the promise resolves, each droid's div should display the homeworld name in a span", () => {
      expect(myFunction(42)).to.be.false
    })
  })
})

describe('numbers.js', () => {
  describe('Number One', () => {
    it("When a user clicks on the button 'Facts About 1', fetch a random fact about the number 1", () => {
      expect(myVariable).to.eq(42)
    })
    it('When the promise is resolved, a random fact about the number 1 should be displayed in the `#one-facts` div', () => {
      expect(myVariable).to.eq(42)
    })
  })

  describe('Pick a Number', () => {
    it('On change of the number input, fetch a math fact about that number', () => {
      expect(myFunction(9001)).to.be.true
    })

    it('description of behavior when the function is invoked in a different situation', () => {
      expect(myFunction(42)).to.be.false
    })
  })
})
