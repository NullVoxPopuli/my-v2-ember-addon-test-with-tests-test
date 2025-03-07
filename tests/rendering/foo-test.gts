import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

module('Rendering | Foo', function (hooks) {
  setupRenderingTest(hooks);

  test('example', async function (assert) {
    await render(<template>hi</template>);

    assert.dom().hasText('hi');
  });
});
