package types

const (
	// ModuleName defines the module name
	ModuleName = "bloggy"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_bloggy"
)

var (
	ParamsKey = []byte("p_bloggy")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	PostKey      = "Post/value/"
	PostCountKey = "Post/count/"
)

const (
	PostyKey      = "Posty/value/"
	PostyCountKey = "Posty/count/"
)
