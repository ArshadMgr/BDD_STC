


describe('Test Describe block', function() {
  /* 
  it('Deletes a record from the database', () => {
       
       // cy.task('queryDb', {
       // cy.task('queryDb', {
        //table: 'dbo.Table_1',
        //condition: 'ID = 1'
        cy.task("queryDb", 'DELETE FROM dbo.Table_1 WHERE ID = 1');

        //cy.task("queryDb", 'UPDATE dbo.Table_1 SET name = "change" WHERE ID = 1');

        // }).then(() => {
          // cy.task('deleteFromDatabase', 'SELECT* FROM master_category')
           //cy.task('queryDb', 'SELECT* FROM master_category')
          //   console.log(result)
          //  expect(result).to.not.deep.include({ id: '55', name: 'testCypress'})

          // })


        // });
    });
})*/
/*
it("should delete a row from the table", () => {
  cy.task("queryDb", 'DELETE FROM dbo.Table_1 WHERE ID = 1').then((rowCount) => {
    expect(rowCount).to.equal(1); // Assuming one row is deleted
  });
})
})
*/

it("should delete a row from the table", () => {
  cy.task("queryDb", 'DELETE FROM dbo.Table_1 WHERE name = Test1')
    .then(() => {
      // Wait for the DELETE operation to complete
      return cy.task("queryDb", 'SELECT * FROM dbo.Table_1 WHERE ID = 1');
    })
      .then((result) => {
        if (result === null) {
          // Row successfully deleted
          expect(result).to.be.null;
        } else {
          // Row still exists
          expect(result.recordset).to.be.empty;
        }
      });
})
})

/*
it("should delete a row from the table", () => {
  cy.task("queryDb", 'DELETE FROM dbo.Table_1 WHERE ID = 1')
    .then(() => {
      // Wait for the DELETE operation to complete
      return cy.task("queryDb", 'SELECT * FROM dbo.Table_1 WHERE ID = 1');
    })
    .then((result) => {
      if (result === null) {
        // Row successfully deleted
        expect(result).to.be.null;
      } else if (result.recordset.length === 0) {
        // Row does not exist
        expect(result.recordset).to.be.empty;
      } else {
        // Row still exists
        console.log(result.recordset);
        expect.fail("Row still exists");
      }
    });
});

})
*/

/*
context('SQL SERVER', () => {
  it('SELECT', () => {
    const sql = 'SELECT * FROM dbo.Table_1 WHERE ID = 1';

    cy.task('sqlServer:execute', sql).should((response) => {
      console.log(response);
    });
  });
});



*/


