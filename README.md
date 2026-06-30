# cypress-automation-project

**What I Learned**

### Test Structure
- How to organize tests using describe(), it(), and hooks
- The difference between before() and beforeEach()

### Assertions
- When to use expect() vs should()
- The importance of retry-ability in UI testing

### Locators
- Best practices for selecting elements
- Why data-cy attributes are preferred

### Waiting
- Why hard-coded waits are bad practice
- Using automatic retry-ability instead

### File Upload
- How Cypress handles file uploads using selectFile()
- Working with binary files

## Challenges Faced
- Understanding the difference between expect() and should()
- Handling file uploads correctly
- Managing multiple tabs/windows

## Key Takeaways
- Cypress's automatic waiting is powerful
- Data attributes make tests more maintainable
- Page Object Model improves code organization

**Reflection**

### Easiest Concept. 
Using cy.get() and basic assertions like .should('be.visible') was straightforward. Cypress's intuitive syntax makes element selection simple.

### Most Challenging.
Understanding the difference between expect() and should() was challenging initially. I learned that should() automatically retries, making it better for UI assertions, while expect() is ideal for API responses and synchronous checks.

### Most Valuable Learning.
The automatic retry-ability mechanism is Cypress's killer feature. It eliminates flaky tests and makes the test suite more reliable. Also, using data attributes (data-cy) is a game-changer for test maintainability.

### Future Improvements.
I want to implement Page Object Model and custom commands in production projects. Also, learning cy.intercept() for API testing would be valuable.

<img width="1889" height="1090" alt="image" src="https://github.com/user-attachments/assets/7f2389fd-97ce-43cb-8f7d-91cdc308a601" />

<img width="1889" height="1090" alt="image" src="https://github.com/user-attachments/assets/7af40258-2f6d-4e42-a647-4aab4d6f6862" />







