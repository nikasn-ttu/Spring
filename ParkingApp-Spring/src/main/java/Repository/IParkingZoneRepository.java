package Repository;

import Entities.ParkingZone;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;
@Repository
public interface IParkingZoneRepository extends CrudRepository<ParkingZone, UUID> {
}
