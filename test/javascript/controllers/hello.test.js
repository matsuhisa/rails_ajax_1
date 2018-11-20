// import "@stimulus/mutation-observers"
// import "@stimulus/polyfills"
import { JSDOM } from "jsdom"
import { Application as StimulusApp } from 'stimulus'
import HelloController from "../../../app/javascript/controllers/hello_controller"

describe('#connect', () => {
  // beforeEach(() => {
  //   mountDOM(`
  //     <div data-controller="hello">
  //       <h1 data-target="hello.output"></h1>
  //     </div>
  //   `);
  // });

  beforeEach(() => {
    const dom = new JSDOM(`
      <div data-controller="hello">
        <h1 data-target="hello.output">h1です</h1>
      </div>
    `);
    console.log(dom.window.document.querySelector("h1").textContent);
    const stimulusApp = StimulusApp.start();
    stimulusApp.register('hello', HelloController);
  });

  it('', () => {
    // const dom = new JSDOM(`
    //   <div data-controller="hello">
    //     <h1 data-target="hello.output">h1です</h1>
    //   </div>
    // `);
    // console.log(dom.window.document.querySelector("h1").textContent);
    // const stimulusApp = StimulusApp.start();
    // stimulusApp.register('hello', HelloController);

    const controller = new HelloController()
    expect(controller.connect()).toBe("こんにちは。 foo です");
  })
})
