package types

const (
	// ModuleName defines the module name
	ModuleName = "whippy"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_whippy"
)

var (
	ParamsKey = []byte("p_whippy")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
