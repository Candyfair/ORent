-- Revert orent:propertiesFunctions from pg

BEGIN;

DROP FUNCTION update_property(json);
DROP FUNCTION add_property(json);

COMMIT;
