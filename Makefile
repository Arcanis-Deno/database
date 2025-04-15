################################
# Project Configuration Makefile
################################

setup:
	@echo "Task: '01.setup'"
	@mkdir -p "dev"
	@touch ./dev/01.setup.sh
	@chmod +x ./dev/01.setup.sh
	./dev/01.setup.sh

build:
	@echo "Task: '02.build'"
	@mkdir -p "dev"
	@touch ./dev/02.build.sh
	@chmod +x ./dev/02.build.sh
	./dev/02.build.sh

validate:
	@echo "Task: '03.validate'"
	@mkdir -p "dev"
	@touch ./dev/02.build.sh
	@chmod +x ./dev/02.build.sh
	@touch ./dev/03.validate.sh
	@chmod +x ./dev/03.validate.sh
	./dev/02.build.sh
	./dev/03.validate.sh
