import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('Rendering difference in VTU', () => {
  it('Render within a template', () => {
    const wrapperOfMountedComponent = mount(HelloWorld, {
      propsData: {
        class: 'foo'
      },
    });

    const wrapperOfTemplateComponent = mount({
      template:`
      <hello-world
        class="foo"
      >
      </hello-world>
      `,
      components: {HelloWorld}
    });

    // This is one output
    expect(wrapperOfTemplateComponent.html()).toBe('<div class="foo"><span></span></div>');

    // This is second output
    expect(wrapperOfMountedComponent.html()).toBe('<div class="foo"><span class="foo"></span></div>');

    // In theory, we would expect them to be equal
    expect(wrapperOfTemplateComponent.html()).toBe(wrapperOfMountedComponent.html());
  });
});
