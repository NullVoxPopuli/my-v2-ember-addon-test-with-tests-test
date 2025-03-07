import Application from '@ember/application';
import Resolver from 'ember-resolver';

import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';

const config = {
  modulePrefix: 'vite-ember-starter',
  environment: import.meta.env.DEV ? 'development' : 'production',
  rootURL: '/',
  locationType: 'none',
  APP: {
    rootElement: '#ember-testing',
    autoboot: false,
  },
};

class App extends Application {
  modulePrefix = config.modulePrefix;
  Resolver = Resolver.withModules({});
}

export function start() {
  setApplication(App.create(config.APP));
  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
