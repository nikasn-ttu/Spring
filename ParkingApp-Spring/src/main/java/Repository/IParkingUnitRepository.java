package Repository;

import Entities.ParkingUnit;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface IParkingUnitRepository extends CrudRepository<ParkingUnit, UUID> {
}
