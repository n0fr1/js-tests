test:
	NODE_OPTIONS=--experimental-vm-modules npm test

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npm test -- --coverage --coverageProvider=v8 